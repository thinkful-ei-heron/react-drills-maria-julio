import React from "react";
//import Tabs from './drills-2/Tabs';
import Accordian from './accordian/accordian'

// array of objects each with a name and content
const sections = [
  { title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { title: 'Secton 2',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { title: 'Section 3',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sbat = [
  {
    text: 'Hello World',
  }
]


class App extends React.Component {
  render() {
    return <div>
<<<<<<< HEAD
      <Tabs tabs={tabsProp} sbat={sbat} />
=======
      <Accordian props={sections}/>
>>>>>>> d2d8e6dc02267aa5891200eec59b198f0dcf87c0
    </div>
  }
}

export default App;