import React from 'react';
import Select, { FormSelectProps } from 'react-bootstrap/FormSelect';

declare interface DropdownProps extends FormSelectProps {
  options: { [key: string]: any }[];
  optionProps: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
}

const Dropdown = (props: DropdownProps) => {
  const { options, optionProps, ...restProps } = props;

  function onChange(value: any) {
    console.log('🚀 ~ file: index.tsx:13 ~ value', value);
  }

  return (
    <Select onChange={onChange} {...restProps}> {
      options.length > 0 ?
        options.map((option) => (
          <option {...optionProps} key={option.value}>{option.render ? option.render(option) : option.label}</option>
        )) : (<option>Tidak ada data</option>)
    }
    </Select>
  );
};

export default Dropdown;