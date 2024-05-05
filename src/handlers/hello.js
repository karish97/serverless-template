async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
}

export const handler = hello;

/** The event parameter contains data about the event that triggered the aws lambda function and the context parameter provides information about the execution environment and the aws lambda function */