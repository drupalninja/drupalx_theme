import SearchResultsTemplate from './search-results.twig';

export default {
  title: 'Content Display/Search Results'
};

export const SearchResults = SearchResultsTemplate.bind({});
SearchResults.args = {
  items: [
    {
      title: 'What are the biggest challenges to starting a business?',
      image:
        "<img src='https://via.placeholder.com/640x480.png' class='img-fluid' alt='Placeholder' />",
      summary:
        '<p>It’s useful to come up with a business plan to think through what you want to do for the development of the product or service, marketing, financial projections and more.</p>',
      link: 'www.url.com'
    },
    {
      title: 'What are the biggest challenges to starting a business?',
      image:
        "<img src='https://via.placeholder.com/640x480.png' class='img-fluid' alt='Placeholder' />",
      summary:
        '<p>It’s useful to come up with a business plan to think through what you want to do for the development of the product or service, marketing, financial projections and more.</p>',
      link: 'www.url.com'
    },
    {
      title: 'What are the biggest challenges to starting a business?',
      image:
        "<img src='https://via.placeholder.com/640x480.png' class='img-fluid' alt='Placeholder' />",
      summary:
        '<p>It’s useful to come up with a business plan to think through what you want to do for the development of the product or service, marketing, financial projections and more.</p>',
      link: 'www.url.com'
    }
  ]
};
