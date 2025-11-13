import type { Meta, StoryObj } from '@storybook/vue3';

import BaseButton from './BaseButton.vue';

const meta = {
  title: 'Components/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      description: 'The visual style variant of the button'
    },
    icon: {
      control: 'text',

    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    onClick: {
      action: 'clicked',
      description: 'Event emitted when the button is clicked'
    }
  },
  args: {
    label: 'Button',
    variant: 'primary',
    icon: 'material-symbols:edit-outline-rounded',
    disabled: false
  }
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args">Button</BaseButton>'
  })
};
