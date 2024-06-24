import ImageTemplate from './image.twig';

export default {
  title: 'General/Image',
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' }
  }
};

export const Image = ImageTemplate.bind({});
Image.args = {
  src: './images/card.webp',
  alt: 'Image alt text'
};
