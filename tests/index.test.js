import test from 'ava'
import {example, promiseExample} from '../src/index'

test('test index example false', t => {
  t.is(example(false), false)
})
// test example
test('test index example true', t => {
  let exists = example(true)
  t.log(exists)
  t.true(exists === true)
})
test('test index promiseExample true ', t => {
  return promiseExample().then(result => {
    t.log(result)
		t.true(result)
	})
})
test.todo('add more tests')