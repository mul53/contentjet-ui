import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import FileIcon from 'lib/components/FileIcon';
import s from './MediaImage.css';


class MediaImage extends Component {

  render() {
    let { media, className } = this.props;
    className = classnames(s.mediaImage, className);
    if (_.includes(['image/gif', 'image/png', 'image/jpg', 'image/jpeg'], media.mimeType)) {
      return <img className={className} src={media.file} />;
    }
    return <FileIcon className={className} mimeType={media.mimeType} />;
  }

}
MediaImage.propTypes = {
  media: PropTypes.object.isRequired
};


export default MediaImage;