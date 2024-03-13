import{j as e}from"./jsx-runtime-2ef3df91.js";import{I as z,B as s,T as a}from"./index-e89be18f.js";import"./index-e03f90b5.js";import"./_commonjsHelpers-725317a4.js";import"./extends-98964cd2.js";import"./index-ac92abf8.js";const R={title:"Form/Input",component:z,size:"md",argTypes:{size:{options:["sm","md"],control:{type:"inline-radio"}}}},n={args:{placeholder:"Type your email"},decorators:[r=>e.jsxs(s,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2"},children:[e.jsx(a,{size:"sm",children:"Email address"}),r()]})]},o={args:{placeholder:"Type your email",disabled:!0},decorators:[r=>e.jsxs(s,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2"},children:[e.jsx(a,{size:"sm",children:"Email address"}),r()]})]},c={args:{prefix:"github.com/"},decorators:[r=>e.jsxs(s,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2"},children:[e.jsx(a,{size:"sm",children:"GitHub account"}),r()]})]},t={args:{prefix:"R$ ",placeholder:"0,00",mask:"currency",locale:"pt-BR"},decorators:[r=>e.jsxs(s,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2"},children:[e.jsx(a,{size:"sm",children:"Price"}),r()]})]},i={args:{prefix:"+55 ",mask:"phone",placeholder:"(xx) x xxxx-xxxx"},decorators:[r=>e.jsxs(s,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2"},children:[e.jsx(a,{size:"sm",children:"Price"}),r()]})]};var l,x,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your email'
  },
  decorators: [Story => {
    return <Box as="label" css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '$2'
    }}>
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>;
  }]
}`,...(p=(x=n.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your email',
    disabled: true
  },
  decorators: [Story => {
    return <Box as="label" css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '$2'
    }}>
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>;
  }]
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,f,h;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    prefix: 'github.com/'
  },
  decorators: [Story => {
    return <Box as="label" css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '$2'
    }}>
          <Text size="sm">GitHub account</Text>
          {Story()}
        </Box>;
  }]
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,b,T;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    prefix: 'R$ ',
    placeholder: '0,00',
    mask: 'currency',
    locale: 'pt-BR'
  },
  decorators: [Story => {
    return <Box as="label" css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '$2'
    }}>
          <Text size="sm">Price</Text>
          {Story()}
        </Box>;
  }]
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var S,B,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    prefix: '+55 ',
    mask: 'phone',
    placeholder: '(xx) x xxxx-xxxx'
  },
  decorators: [Story => {
    return <Box as="label" css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '$2'
    }}>
          <Text size="sm">Price</Text>
          {Story()}
        </Box>;
  }]
}`,...(j=(B=i.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const M=["Primary","Disabled","WithPrefix","WithCurrencyMask","WithPhoneMask"];export{o as Disabled,n as Primary,t as WithCurrencyMask,i as WithPhoneMask,c as WithPrefix,M as __namedExportsOrder,R as default};
