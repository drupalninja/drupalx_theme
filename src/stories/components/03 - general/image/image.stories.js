import ImageTemplate from './image.twig';

export default {
  title: 'General/Image'
};

export const Image = ImageTemplate.bind({});
Image.args = {
  src: 'https://via.placeholder.com/640x480.png',
  alt: 'Image alt text'
};
