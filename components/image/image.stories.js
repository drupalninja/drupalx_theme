import ImageTemplate from './image.twig';

export default {
  title: 'General/Image'
};

export const Image = ImageTemplate.bind({});
Image.args = {
  src: './images/card.webp',
  alt: 'Image alt text'
};
