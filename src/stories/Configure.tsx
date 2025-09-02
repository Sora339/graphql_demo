import Image from "next/image";
import { RightArrow } from "./components/RightArrow";

import Github from "./assets/github.svg";
import Discord from "./assets/discord.svg";
import Youtube from "./assets/youtube.svg";
import Tutorials from "./assets/tutorials.svg";
import Styling from "./assets/styling.png";
import Context from "./assets/context.png";
import Assets from "./assets/assets.png";
import Docs from "./assets/docs.png";
import Share from "./assets/share.png";
import FigmaPlugin from "./assets/figma-plugin.png";
import Testing from "./assets/testing.png";
import Accessibility from "./assets/accessibility.png";
import Theming from "./assets/theming.png";
import AddonLibrary from "./assets/addon-library.png";

export const ConfigurePage = () => (
  <div>
    <div className='sb-section-title'>
      <h1>Configure your project</h1>
      <p>Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community.</p>
    </div>
    <div className="sb-section">
      <div className="sb-section-item">
        <Image
          src={Styling}
          alt="A wall of logos representing different styling technologies"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <h4 className="sb-section-item-heading">Add styling and CSS</h4>
        <p className="sb-section-item-paragraph">Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook.</p>
        <a
          href="https://storybook.js.org/docs/configure/styling-and-css"
          target="_blank"
          rel="noreferrer"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-section-item">
        <Image
          src={Context}
          alt="An abstraction representing the composition of data for a component"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <h4 className="sb-section-item-heading">Provide context and mocking</h4>
        <p className="sb-section-item-paragraph">Often when a story doesn't render, it's because the component is expecting a specific environment or context (like a theme provider or data fetcher). Learn more about configuring context for Storybook.</p>
        <a
          href="https://storybook.js.org/docs/writing-stories/decorators#context-for-mocking"
          target="_blank"
          rel="noreferrer"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-section-item">
        <Image
          src={Assets}
          alt="A representation of typography and image assets"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <h4 className="sb-section-item-heading">Load assets and resources</h4>
        <p className="sb-section-item-paragraph">To link static files in stories, you need to configure the Static directory. Learn more about configuring assets and static files for Storybook.</p>
        <a
          href="https://storybook.js.org/docs/configure/images-and-assets"
          target="_blank"
          rel="noreferrer"
        >Learn more<RightArrow /></a>
      </div>
    </div>
    
    <div className="sb-section sb-section-alt">
      <div className="sb-section-item">
        <Image
          src={Docs}
          alt="A representation of the documentation page"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <h4 className="sb-section-item-heading">Autodocs</h4>
        <p className="sb-section-item-paragraph">Auto-generate living documentation for your components. Learn more about setting up auto-generated docs for your components.</p>
        <a
          href="https://storybook.js.org/docs/writing-docs/autodocs"
          target="_blank"
          rel="noreferrer"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-section-item">
        <Image
          src={Share}
          alt="A representation of the sharing workflow"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <h4 className="sb-section-item-heading">Share your stories</h4>
        <p className="sb-section-item-paragraph">Publish your Storybook online to share your components and get feedback from your team. Learn more about sharing Storybook online.</p>
        <a
          href="https://storybook.js.org/docs/sharing/publish-storybook"
          target="_blank"
          rel="noreferrer"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-section-item">
        <Image
          src={FigmaPlugin}
          alt="A screenshot of the Figma plugin"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <h4 className="sb-section-item-heading">Design tokens</h4>
        <p className="sb-section-item-paragraph">Use Storybook's design tokens to sync your design system with your code. Learn more about linking your design tokens to your components.</p>
        <a
          href="https://storybook.js.org/docs/configure/styling-and-css#importing-css-files"
          target="_blank"
          rel="noreferrer"
        >Learn more<RightArrow /></a>
      </div>
    </div>
  </div>
);
