import React from 'react';
import styles from './index.less';

interface Interface {}

/**
 * 包装 a 标签
 */
class WrapperATag extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick();
  };

  render() {
    const { children } = this.props;
    const { handleClick } = this;
    return (
      <div style={styles.aTagBox}>
        <a onClick={handleClick}>{children}</a>;
      </div>
    );
  }
}

export default WrapperATag;
