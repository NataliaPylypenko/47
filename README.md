<h1>React + TypeScript</h1>

## Setup Environment
`npx create-react-app react-typescript --template typescript`

## Typing of Functional Components
* App.tsx
```typescript jsx
type TitleProps = {
  title: string,
  test?: string,
}

const Title = ({title, test = 'test'}: TitleProps) => <h1>{title}{test}</h1>;

const App = () => <Title title="test" />
```

## Typing of Class Components
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
