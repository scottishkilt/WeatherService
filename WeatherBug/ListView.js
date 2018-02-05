import Row from './Row';

class ListViewDemo extends React.Component {
  /*
   * Removed for brevity
   */
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
      />
    );
  }
}

export default ListViewDemo;