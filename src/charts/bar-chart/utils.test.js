import { formatData, getHighestValue } from './utils';

const chartKey = [
  { color: 'giant-leap', label: 'Brand A' },
  { color: 'critical-mass', label: 'Brand B' },
  { color: 'serene-sea', label: 'Brand C' },
];

const data = [{
  label: 'Family',
  benchmark: 100,
  values: {
    'giant-leap': 0,
    'serene-sea': 90,
    'critical-mass': 50,
  },
}, {
  label: 'Games',
  benchmark: 33,
  values: {
    'giant-leap': 40,
    'serene-sea': 53,
    'critical-mass': 40,
  },
}, {
  label: 'Family & Parenting',
  benchmark: 33,
  values: {
    'giant-leap': 50,
    'serene-sea': 50,
    'critical-mass': 50,
  },
}, {
  label: 'Technology',
  benchmark: 33,
  values: {
    'giant-leap': 69,
  },
}, {
  label: 'Books',
  benchmark: 33,
  values: {
    'giant-leap': 25,
    'serene-sea': 50,
  },
}];

describe('BarChart (utils)', () => {
  it('formats data', () => {
    expect(formatData(chartKey, data)).toEqual([{
      label: 'Family',
      benchmark: 100,
      values: [{
        value: 0,
        color: 'giant-leap',
      }, {
        value: 50,
        color: 'critical-mass',
      }, {
        value: 90,
        color: 'serene-sea',
      }],
    }, {
      label: 'Games',
      benchmark: 33,
      values: [{
        value: 40,
        color: 'giant-leap',
      }, {
        value: 40,
        color: 'critical-mass',
      }, {
        value: 53,
        color: 'serene-sea',
      }],
    }, {
      label: 'Family & Parenting',
      benchmark: 33,
      values: [{
        value: 50,
        color: 'giant-leap',
      }, {
        value: 50,
        color: 'critical-mass',
      }, {
        value: 50,
        color: 'serene-sea',
      }],
    }, {
      label: 'Technology',
      benchmark: 33,
      values: [{
        value: 69,
        color: 'giant-leap',
      }],
    }, {
      label: 'Books',
      benchmark: 33,
      values: [{
        value: 25,
        color: 'giant-leap',
      }, {
        value: 50,
        color: 'serene-sea',
      }],
    }]);
  });

  it('it gets highest value', () => {
    expect(getHighestValue(data)).toBe(100);
  });
});
