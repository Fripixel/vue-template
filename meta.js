/**
 * Meta JS File that will be picked up by the Vue CLI
 */
module.exports = {
  /**
   * Add your own Prompt questions here!
   */
  prompts: {
    name: {
      type: 'string', // Question type
      required: true, // Is question Required
      message: 'vue-template-de-projeto' // Question it's self
    },
    description: {
      type: 'string',
      required: false,
      message: '',
      default: 'Template de Projeto Vue JS'
    },
    author: {
      type: 'string',
      message: 'Fripixel'
    },
    extra: {
      type: 'string',
      message: 'Extra Messaging!'
    }
  },

  /**
   * You can add a custom complete message
   */
  completeMessage: 'Projeto Completo!'
};