/**
 * Created by intelligrape on 3/5/17.
 */


import React from 'react';


class ProgressBar extends React.Component {
   
    render() {
      const {total ,download } = this.props;
    const progress = (download/total)*100;
    return(
<h1> Your progress is {progress} %</h1>
    );
}
}
export default ProgressBar;