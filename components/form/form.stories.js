import './form.scss';
import FormTemplate from './form.twig';

export default {
  title: 'Editorial/Form',
  component: FormTemplate
};

export const Form = FormTemplate.bind({});
Form.args = {};
