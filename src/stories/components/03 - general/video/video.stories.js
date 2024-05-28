import VideoTemplate from './video.twig';

export default {
  title: 'General/Video',
  argTypes: {
    video: {
      description: 'Define the video embed',
      control: 'text'
    }
  }
};

export const Video = VideoTemplate.bind({});

Video.args = {
  video:
    "<iframe width='560' height='315' src='https://www.youtube.com/embed/I95hSyocMlg?si=1n8TVSmIkVxSCHxa' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
};
