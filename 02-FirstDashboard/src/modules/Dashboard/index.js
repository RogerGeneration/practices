
import React from 'react';
import { FormBuilder } from 'react-formio';


import Navbar from 'Components/Navbar';

import styles from './styles.scss';

class Dashboard extends React.PureComponent {
  render () {
    const options = {
      i18n: {
        lng: 'en',
        resources: {
          en: {
            translation: {
              complete: 'Submission Complete',
              error: 'Please fix the following errors before submitting.',
              required: '{{field}} is required',
              pattern: '{{field}} does not match the pattern {{pattern}}',
              minLength: '{{field}} must be longer than {{length}} characters.',
              maxLength: '{{field}} must be shorter than {{length}} characters.',
              min: '{{field}} cannot be less than {{min}}.',
              max: '{{field}} cannot be greater than {{max}}.',
              minSelectedCount: 'You must select at least {{minCount}} items to continue.',
              maxSelectedCount: 'You can only select up to {{maxCount}} items to continue.',
              maxDate: '{{field}} should not contain date after {{- maxDate}}',
              minDate: '{{field}} should not contain date before {{- minDate}}',
              invalid_email: '{{field}} must be a valid email.', // eslint-disable-line camelcase
              invalid_url: '{{field}} must be a valid url.', // eslint-disable-line camelcase
              invalid_regex: '{{field}} does not match the pattern {{regex}}.', // eslint-disable-line camelcase
              invalid_date: '{{field}} is not a valid date.', // eslint-disable-line camelcase
              invalid_day: '{{field}} is not a valid day.', // eslint-disable-line camelcase
              mask: '{{field}} does not match the mask.',
              stripe: '{{stripe}}',
              month: 'AAAAAAAAAAAAA',
              day: 'Day',
              year: 'Year',
              january: 'JanuEEEEEEEEary',
              february: 'February',
              march: 'March',
              april: 'April',
              may: 'May',
              june: 'June',
              july: 'July',
              august: 'August',
              september: 'September',
              october: 'October',
              november: 'November',
              december: 'December',
              next: 'Next',
              previous: 'Previous',
              cancel: 'AAAAAAAAAAAAA',
              submit: 'BBBBBBBBB'
            }
          }
        }
      }
    };
    return (
      <div>
        <Navbar>
          <Navbar.Brand />
          <Navbar.Item>Soy un item 1</Navbar.Item>
          <Navbar.Item>Soy un item 2</Navbar.Item>
        </Navbar>
        <div className={styles.container}>
          asd
          <FormBuilder ref="una_ref" options={options} form={{ display: 'form' }} onChange={(schema) => console.log(this)} />
  , document.getElementById('builder')
        </div>
      </div>
    );
  }
}

export default Dashboard;

