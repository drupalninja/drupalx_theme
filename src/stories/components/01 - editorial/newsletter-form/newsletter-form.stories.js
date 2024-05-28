import './newsletter-form.scss';
import NewsletterFormTemplate from './newsletter-form.twig';

export default {
  title: 'Editorial/Newsletter Form'
};

export const NewsletterForm = NewsletterFormTemplate.bind({});
NewsletterForm.args = {
  modifier: 'border col-10 rounded'
};
