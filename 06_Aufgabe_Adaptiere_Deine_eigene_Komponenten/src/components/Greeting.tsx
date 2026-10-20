type GreetingProps = {
  name: string;
};

export default function Greeting(props: GreetingProps) {
  return <h2>Hello {props.name}!</h2>;
}

