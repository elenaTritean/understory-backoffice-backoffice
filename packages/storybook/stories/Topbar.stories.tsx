import type { Meta, StoryObj } from '@storybook/react-vite';
import { Topbar } from './Topbar';
import { Button } from './Button';

const meta = {
  title: 'Components/Topbar',
  component: Topbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: 'Understory',
    navigation: (
      <>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </>
    ),
    actions: (
      <>
        <Button label="Sign In" primary={false} size="small" />
        <Button label="Sign Up" primary={true} size="small" />
      </>
    ),
  },
};

export const WithLogo: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #749b4d, #404705)',
          }}
        />
        <span>Understory</span>
      </div>
    ),
    navigation: (
      <>
        <a href="#dashboard">Dashboard</a>
        <a href="#projects">Projects</a>
        <a href="#team">Team</a>
      </>
    ),
    actions: (
      <>
        <Button label="Notifications" primary={false} size="small" />
        <Button label="Profile" primary={true} size="small" />
      </>
    ),
  },
};

export const Simple: Story = {
  args: {
    logo: 'My App',
    actions: <Button label="Login" primary={true} size="small" />,
  },
};

export const Fixed: Story = {
  args: {
    logo: 'Understory',
    navigation: (
      <>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
      </>
    ),
    actions: <Button label="Get Started" primary={true} size="small" />,
    fixed: true,
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
          <h2>Scroll to see fixed topbar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i}>
              This is paragraph {i + 1}. The topbar stays fixed at the top while you scroll.
            </p>
          ))}
        </div>
      </div>
    ),
  ],
};
