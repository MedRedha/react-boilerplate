import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './home.messages';
import MaintainerList from './maintainerList/maintainerList.component';
import LanguageSelector from './languageSelector/languageSelector.component';

class Home extends PureComponent {
  componentWillMount() {
    this.props.getMaintainers();
  }

  render() {
    return (
      <div className="home">
        <Helmet
          title="Homepage"
          meta={[
            { name: 'description', content: 'Homepage of Apptension React Boilerplate' },
          ]}
        />

        <h1>
          <FormattedMessage {...messages.welcome} />
        </h1>

        <MaintainerList items={this.props.maintainers} />

        <LanguageSelector
          language={this.props.language}
          setLanguage={this.props.setLanguage}
          router={this.props.router}
        />
      </div>
    );
  }
}

Home.propTypes = {
  maintainers: PropTypes.object,
  language: PropTypes.string.isRequired,
  getMaintainers: PropTypes.func.isRequired,
  setLanguage: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

export default Home;
