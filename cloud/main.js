Parse.Cloud.define('ensureClassExists', async () => {
    const schema = new Parse.Schema('MyObject');
    try {
      await schema.get();
    } catch (error) {
      if (error.code === Parse.Error.INVALID_CLASS_NAME) {
        await schema.addField('name', 'String');
        await schema.save();
      } else {
        throw error;
      }
    }
  });
