import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AllComponents from 'formiojs/components';
import Components from 'formiojs/components/Components';
Components.setComponents(AllComponents);
import FormBuilder from 'formiojs/FormBuilder';

export default class extends Component {
  static propTypes = {
    form: PropTypes.object,
    options: PropTypes.object,
    onSaveComponent: PropTypes.func,
    onUpdateComponent: PropTypes.func,
    onDeleteComponent: PropTypes.func,
    onCancelComponent: PropTypes.func,
    onEditComponent: PropTypes.func,
    onChange: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    Builder: PropTypes.any,
    dir: PropTypes.string,
  };

  static defaultProps = {
    options: {},
    Builder: FormBuilder,
    dir: 'ltr'
  };

  componentDidMount = () => {
    this.initializeBuilder(this.props);
  };

  componentWillReceiveProps = nextProps => {
    const { options, form } = this.props;

    if (form.display !== nextProps.form.display) {
      this.initializeBuilder(nextProps);
    }

    if (options !== nextProps.options) {
      this.initializeBuilder(nextProps);
    }
  };

  componentWillUnmount = () => {
    if (this.builder !== undefined) {
      this.builder.instance.destroy(true);
    }
  };

  initializeBuilder = props => {
    console.log(props);
    const { options, form, Builder, dir } = props;

    if (this.builder !== undefined) {
      this.builder.instance.destroy(true);
    }

    if (dir) {
      this.dir = dir;
    }

    this.builder = new Builder(this.element, form, options);
    this.builderReady = this.builder.setDisplay(form.display);

    this.builderReady.then(() => {
      this.builder.instance.on('saveComponent', this.emit('onSaveComponent'));
      this.builder.instance.on(
        'updateComponent',
        this.emit('onUpdateComponent')
      );
      this.builder.instance.on(
        'deleteComponent',
        this.emit('onDeleteComponent')
      );
      this.builder.instance.on(
        'cancelComponent',
        this.emit('onCancelComponent')
      );
      this.builder.instance.on('editComponent', this.emit('onEditComponent'));
      this.builder.instance.on('saveComponent', this.onChange);
      this.builder.instance.on('updateComponent', this.onChange);
      this.builder.instance.on('deleteComponent', this.onChange);
    });
  };

  onChange = () => {
    if (
      this.props.hasOwnProperty('onChange') &&
      typeof this.props.onChange === 'function'
    ) {
      this.props.onChange(this.builder.instance.schema);
    }
  };

  emit = funcName => {
    return (...args) => {
      if (
        this.props.hasOwnProperty(funcName) &&
        typeof this.props[funcName] === 'function'
      ) {
        this.props[funcName](...args);
      }
    };
  };

  render = () => {
    return (
      <div dir="rtl">
        Probando
        <div dir={this.dir} ref={element => (this.element = element)} />
      </div>
    );
  };
}
