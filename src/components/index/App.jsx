import React, { Component } from 'react';
import Markdown from 'react-markdown/with-html';
import { Ad, Section, Share, Headline, Dek, Info } from '@politico/interactive-style';

import { pib as meta } from 'package.json';
import content from 'Content';

import 'Theme/base.scss';

import { processData } from './utils/processData';

import Scatterplot from './Scatterplot';
import Table from './Table';

class App extends React.Component {
  constructor(props){
    super(props);
    //const { usData, usNowData, stateData, timestamp} = props;

    const processedData = processData();
    this.state = {
      data: processedData,
    }
  }

  render() {
    const { copy, timestamp } = this.props;
    const { data } = this.state;
    //console.log(usResults, stateResults);

    return (
      <div>
        <Share subject={meta.pageName} shareTweet={content.meta.social.twitter.share_tweet} />
        <Section href={content.section.link}>{content.section.name}</Section>
        <Headline>{copy.Hed}</Headline>
        <Dek>{copy.Dek}</Dek>
        <Info {...meta} />

        <Markdown source={copy.Intro} className='body' linkTarget='_blank' />

        <h3 className='main-sub'> {copy.ScatterplotHed} </h3>
        <p className='main-dek'> {copy.ScatterplotDek} </p>

        <Scatterplot data={data} />

        <Ad.Dynamic />

        <h3 className='main-sub'> {copy.BarsHed} </h3>
        <p className='main-dek'> {copy.BarsDek} </p>

        <Table data={data.filter(a => a.bin === 3)} />
        <Markdown source={copy.DangerZoneCopy} className='body' linkTarget='_blank' />

        <Ad.Dynamic />


        <Markdown source={copy.Methodology} className='methodology' linkTarget='_blank' />

      </div>
    );
  }
}

export default App;
