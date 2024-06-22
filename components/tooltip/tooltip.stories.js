import TooltipTemplate from './tooltip.twig';
import './tooltip.behavior.js';

export default {
  title: 'Messages/Tooltip'
};

export const Tooltip = TooltipTemplate.bind({});

Tooltip.play = async () => {
  console.log('Tooltip.play');
  Drupal.behaviors.tooltip.attach();
};

Tooltip.args = {};
