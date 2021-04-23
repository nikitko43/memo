import React, {useContext} from 'react';
import Part from "./Part";
import {SketchbookContext} from "../index";
import {observer} from "mobx-react-lite";
import {Accordion, AccordionItem} from "./Accordion";

const Configuration = observer((props) => {
  const state = useContext(SketchbookContext)

  return <Accordion>
    {
      state.configurations.filter(conf => conf.colorChart === null).map(conf => (
        <AccordionItem key={conf.id} label={conf.part.name} index={conf.id}>
          <Part {...conf.part} optional={conf.optional} defaultFinish={conf.defaultFinish} />
        </AccordionItem>
      ))
    }
  </Accordion>
});

export default Configuration;