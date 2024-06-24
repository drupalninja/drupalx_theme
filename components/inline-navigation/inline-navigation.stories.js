import InlineNavigationTemplate from './inline-navigation.twig';

export default {
  title: 'Navigation/Inline Navigation',
  argTypes: {
    nav_items: { control: 'object' }
  }
};

export const InlineNavigation = InlineNavigationTemplate.bind({});
InlineNavigation.args = {
  nav_items: [
    {
      text: 'Link 1',
      url: '#'
    },
    {
      text: 'Link 2',
      url: '#'
    },
    {
      text: 'Link 3',
      url: '#'
    }
  ]
};
