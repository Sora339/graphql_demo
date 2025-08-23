import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';
import Image from "next/image";
import Styling from "./assets/styling.png";
import Assets from "./assets/assets.png";
import { RightArrow } from './components/RightArrow';


const ConfigurePage = () => (
  <div className="sb-container">
    <div className='sb-section-title'>
      <h1>Configure your project</h1>
      <p>Because Storybook works separately from your app, you&apos;ll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community.</p>
    </div>
    <div className="sb-section">
      <div className="sb-section-item">
        <Image
          src={Styling}
          alt="A wall of logos representing different styling technologies"
          width={300}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />
        <h4 className="sb-section-item-heading">Add styling and CSS</h4>
        <p className="sb-section-item-paragraph">Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook.</p>
        <a
          href="https://storybook.js.org/docs/configure/styling-and-css/?renderer=react&ref=configure"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more<RightArrow />
        </a>
      </div>
      <div className="sb-section-item">
        <Image
          src={Assets}
          alt="A representation of files being imported"
          width={300}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />
        <h4 className="sb-section-item-heading">Import assets and resources</h4>
        <p className="sb-section-item-paragraph">
          To link static files (such as fonts) to Storybook, use the
          public folder feature to ensure assets are served correctly.
        </p>
        <a
          href="https://storybook.js.org/docs/configure/images-and-assets/?renderer=react&ref=configure"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more<RightArrow />
        </a>
      </div>
    </div>
  </div>
);

const meta: Meta = {
  title: 'Example/Configure',
  component: ConfigurePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};