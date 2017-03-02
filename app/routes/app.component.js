import React, { PropTypes, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { get } from 'lodash';

import { appLocales, translationMessages } from '../i18n';
import { DEFAULT_LOCALE } from '../modules/locales/locales.constants';


class App extends PureComponent {
  componentWillMount() {
    const language = get(this.props.router, 'params.lang', DEFAULT_LOCALE);

    if (appLocales.indexOf(language) === -1) {
      this.props.setLanguage(DEFAULT_LOCALE);
      this.props.router.push('/404');
    } else {
      this.props.setLanguage(language);
    }
  }

  render() {
    if (!this.props.locale) {
      return null;
    }

    return (
      <div className="app">
        <Helmet
          titleTemplate="%s - Apptension React Boilerplate"
          defaultTitle="Apptension React Boilerplate"
          meta={[
            { name: 'description', content: 'Apptension React Boilerplate application' },
          ]}
        />

        <IntlProvider
          locale={this.props.locale}
          key={this.props.locale}
          messages={translationMessages[this.props.locale]}
        >
          {React.Children.only(this.props.children)}
        </IntlProvider>
      </div>
    );
  }
}

App.propTypes = {
  locale: PropTypes.string,
  router: PropTypes.object.isRequired,
  setLanguage: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default App;
