// import { UPLOAD_URL } from "./constants";

// const getPhotoUrl = (obj) => UPLOAD_URL + obj._id + '.' + obj.name.split('.')[1];

// export default getPhotoUrl

import { BASEURL, UPLOAD_URL } from './constants';

const getUserImage = photo => {
   return `${UPLOAD_URL}${photo}`;
};

const getImage = photo => {
   return `${UPLOAD_URL}${photo?._id}.${photo?.name.split('.')[1]}`;
};

const getImage2 = photo => {
   if (photo && photo.name) {
      const extension = photo.name.split('.').pop();
      return `${UPLOAD_URL}${photo._id}.${extension}`;
   }
   return '';
};

const getImageNew = ({ _id, name }) => {
   return `${BASEURL}upload/${_id}.${name.split('.')[1]}`;
};

export { getImage, getImage2, getImageNew, getUserImage };
