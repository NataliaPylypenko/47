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
