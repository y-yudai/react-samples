import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

import { Provider, Button } from "reakit";
import * as system from "reakit-system-bootstrap";

@connect((store) => {
  return {
    user: store.userReducer.user,
    userFetched: store.userReducer.fetched,
    tweets: store.tweetsReducer.tweets,
    tweetsFetching: store.tweetsReducer.fetching
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser());
  }
  fetchTweets() {
    this.props.dispatch(fetchTweets());
  }
  render() {
    const { user, tweets, tweetsFetching } = this.props;

    if (tweetsFetching === true) {
      return (<div>fetching...</div>);
    }
    if (!tweets.length) {
      return (
        <Provider unstable_system={system}>
          <Button onClick={this.fetchTweets.bind(this)}>Load</Button>
        </Provider>
      );
    }

    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>);

    return (
      <div>
        <h1>{user.name}</h1>
        <ul>{mappedTweets}</ul>
      </div>
    );
  }
}
