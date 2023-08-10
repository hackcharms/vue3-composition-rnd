import { ref, h } from 'vue';
import type { VNodeProps } from 'vue';

interface NodeJsonType {
  className?: string | string[];
  id?: string;
  name?: string;
  [key: string]: any;
  children?: NodeJsonType | NodeJsonType[];
}
const dataX: NodeJsonType = {
  //   hel: 'dsfhj',
  id: 'jsdhfg',
  name: 'kjsgad',
  className: '',
  ref: 'hello',
  children: [
    {
      name: 'dsfhj',
      className: 'jshdfjhg',
      id: 'jsgdfj',
    },
    {
      children: [
        {
          className: '',
          id: '',
          name: 'helko',
          //   hel: 'dsfhj',
          children: [
            {
              p: {
                className: '',
                id: '',
                name: '',
                hel: 'dsfhj',
              },
            },
            {
              p: 'string',
            },
          ],
        },
      ],
    },
  ],
};
console.log(dataX);
export default {
  name: 'Pending',
  props: {
    msg: '',
  },
  setup(props: Props) {
    const count = ref(1);
    const jsosnData = ref<NodeJsonType | Record<string, NodeJsonType>>({
      div: [
        {
          p: 'hello There P1',
        },
        {
          p: `hello There P2 ${JSON.stringify(props)} count ==>${count.value}`,
        },
        {
          div: {
            innerHTML: 'hello Div child count ==> ' + count.value,
            onClick: (event) => {
              console.log(event, 'clicked', count.value++);
            },
            className: 'text-primary text-decoration-underline',
          },
        },
        {
          ul: {
            className: 'text-primary',
            children: [
              {
                li: 'list1',
              },
              {
                li: 'list2',
              },
            ],
          },
        },
      ],
    });

    function renderJson(jsonData: Record<string, any>): VNode | void {
      if (typeof jsonData !== 'object') return;

      for (const tagName in jsonData) {
        const innerContent = jsonData[tagName];
        if (typeof innerContent === 'string') {
          return h(tagName, innerContent);
        }
        if (typeof innerContent === 'object' && typeof innerContent?.innerHTML === 'string') {
          return h(tagName, innerContent);
        }
        if (typeof innerContent === 'object' && Array.isArray(innerContent?.children)) {
          return h(
            tagName,
            { className: innerContent.className },
            innerContent.children.map((el: Record<string, any>) => renderJson(el))
          );
        }
        return h(
          tagName,
          Object.keys(innerContent).map((el) => renderJson(innerContent[el]))
        );
      }
    }

    // return () => renderJson(jsosnData.value);
    return () =>
      h('p', {
        onClick: () => {
          console.log('hello');
        },
        className: '',
      });
  },
};
