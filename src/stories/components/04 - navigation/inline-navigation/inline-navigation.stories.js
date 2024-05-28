import InlineNavigationTemplate from './inline-navigation.twig';

export default {
  title: 'Navigation/Inline Navigation'
};

export const InlineNavigation = InlineNavigationTemplate.bind({});
InlineNavigation.args = {
  items: [
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
