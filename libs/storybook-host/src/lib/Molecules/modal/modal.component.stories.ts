import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { ModalComponent } from '@alfabit-alura/modal';

const meta: Meta<ModalComponent> = {
  component: ModalComponent,
  render: (args) => ({
    props: args,
    template: `
      <ab-modal ${argsToTemplate(args)}>
        Conteúdo qualquer
      </ab-modal>
    `,
  }),
};

export default meta;

type Story = StoryObj<ModalComponent>;

export const Open: Story = {
  args: {
    modalTitle: 'Heading',
    isOpen: true,
  },
};
