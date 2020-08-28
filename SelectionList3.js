import React, { Component } from 'react';

class Searchable extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      listAccount: [],
      style: {
        searchResultList: {
          listStyle: 'none',
          width: '100%',
          height: '0em',
        },
        searchResultItem: {
          listStyle: 'none',
          width: '100%',
          height: '0em',
        },
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);
  }

  onChange(event) {
    this.props.onInputChange(
      this.props.data.type,
      this.props.data.id,
      event.target.value
    );
  }

  onFocus(event) {
    console.log('input on focus');
    const showResultList = {
      height: '10em',
      overflow: 'auto',
    };

    const showResultItem = {
      height: '2.4em',
      visibility: 'visible',
    };

    let style = this.state.style;
    style.searchResultList = showResultList;
    style.searchResultItem = showResultItem;
    this.setState({ style });
  }

  onBlur(event) {
    console.log('input on Blur');
    const showResultList = {
      height: '0',
      overflow: 'hidden',
    };

    const showResultItem = {
      height: '0',
      visibility: 'collapse',
    };

    let style = this.state.style;
    style.searchResultList = showResultList;
    style.searchResultItem = showResultItem;
    this.setState({ style });
  }

  onItemClickHandler(event) {
    console.log('test');
    console.log(event.target);
  }

  render() {
    return (
      <div className='searchable'>
        <input
          type='search'
          className='input-searchable'
          value={this.props.data.input}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <div className='search-result'>
          <SearchResultList
            ResultList={this.props.accounts}
            listStyle={this.state.style.searchResultList}
            listItemStyle={this.state.style.searchResultItem}
            onClick={this.onItemClickHandler}
          />
        </div>
      </div>
    );
  }
}

// SearchResultList Component
const SearchResultList = ({
  ResultList,
  listStyle,
  listItemStyle,
  onClick,
}) => (
  <ul style={listStyle} onClick={onClick}>
    {ResultList.map((item, idx) => (
      <SearchResultItem
        key={++idx}
        style={listItemStyle}
        text={item.name}
        onClick={onClick}
      />
    ))}
  </ul>
);

// SearchResultItem Component
const SearchResultItem = ({ onClick, text, style }) => (
  <li style={style} onClick={onClick}>
    {text}
  </li>
);
