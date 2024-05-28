import UtilityNavTemplate from './utility-nav.twig';

export default {
  title: 'Navigation/Utility Nav',
  argTypes: {}
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
