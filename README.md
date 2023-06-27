<h1>React + TypeScript</h1>

## Setup Environment
`npx create-react-app react-typescript --template typescript`

## Typing of Functional Components
App.tsx
```typescript jsx
type TitleProps = {
  title: string,
  test?: string,
}

const Title = ({title, test = 'test'}: TitleProps) => <h1>{title}{test}</h1>;

const App = () => <Title title="test" />
```

## Typing of Class Components
App.tsx
```typescript jsx
type CounterProps = {
  title?: string,
}

type CounterState = {
  count: number,
}

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  static defaultProps: CounterProps = {
    title: "Default counter: ",
  }

  static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
    return false ? { count: 2 } : null;
  }

  componentDidMount():void {

  }

  shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
    return true;
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: ++count,
    }));
  }

  render() {
    return (
        <div>
          <h1>{this.props.title}{this.state.count}</h1>
          <button onClick={this.handleClick}>+1</button>
        </div>
    );
  }
}

const App = () => <Counter title="Counter: " />
```

## Typing of Events
App.tsx
```typescript jsx
class Form extends Component<{}, {}> {

  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted!');
  }

  handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
    console.log('Coppied!');
  }

  render() {
    return (
        <form
            onSubmit={this.handleSubmit}
        >
          <label>
            Simple text:
            <input
                onFocus={this.handleFocus}
                onCopy={this.handleCopy}
                type="text"
                name="text"
            />
            <button
                type="submit"
            >Submit</button>
          </label>
        </form>
    );
  }
}

const App:React.FC = () => <Form />;
```