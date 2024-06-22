import './tabs.scss';
import TabsTemplate from './tabs.twig';

export default {
  title: 'Navigation/Tabs'
};

export const Tabs = TabsTemplate.bind({});
Tabs.args = {
  items: [
    {
      title: 'Active',
      url: '#',
      active: true
    },
    {
      title: 'Link',
      url: '#'
    },
    {
      title: 'Link',
      url: '#'
    },
    {
      title: 'Disabled',
      disabled: true
    }
  ]
};
