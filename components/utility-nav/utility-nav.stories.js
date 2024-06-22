import UtilityNavTemplate from './utility-nav.twig';

export default {
  title: 'Navigation/Utility Nav',
  argTypes: {
    links: {
      description: 'Define the Utility Nav links.',
      control: 'array'
    }
  }
};

export const UtilityNav = UtilityNavTemplate.bind({});

UtilityNav.args = {
  links: [
    {
      url: '#',
      text: 'Link 1'
    },
    {
      url: '#',
      text: 'Link 2'
    },
    {
      url: '#',
      text: 'Link 3'
    }
  ]
};
