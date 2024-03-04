import { useCounterStore } from '../../../src/stores/counter';
import { beforeEach, describe, expect, test } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

describe('useCounterStore', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    /**------------------------------------------------------------------------------------
     * TEST TO VERIFY THAT THE STORE'S INCREMENT() FUNCTION INCREMENTS THE COUNTER BY 1.
     * WE CALL THE STORE'S INCREMENT() FUNCTION AND THEN VERIFY THAT THE COUNTER
     * HAS BEEN INCREMENTED CORRECTLY, EXPECTING ITS VALUE TO BE 1.
    ---------------------------------------------------------------------------------------*/
    test('increment() should increase the counter by 1', () => {

        const counterStore = useCounterStore();

        // CALL THE INCREMENT FUNCTION //
        counterStore.increment();

        // CHECK IF THE COUNTER WAS INCREMENTED CORRECTLY //
        expect(counterStore.count).toBe(1);

    });

    /**------------------------------------------------------------------------------------
     * TEST TO VERIFY THAT THE STORE'S DECREMENT() FUNCTION DECREMENTS THE COUNTER BY 1.
     * WE SET THE COUNTER TO A VALUE GREATER THAN 0, THEN CALL THE DECREMENT() FUNCTION
     * FROM THE STORE AND WE VERIFY THAT THE COUNTER HAS BEEN DECREMENTED CORRECTLY, 
     * EXPECTING ITS VALUE TO BE 0.
    ---------------------------------------------------------------------------------------*/
    test('decrement() should decrement the counter by 1', () => {

        const counterStore = useCounterStore();

        // SET THE COUNTER TO A VALUE GREATER THAN 0 //
        counterStore.count = 1;

        // CALL THE DECREMENT FUNCTION //
        counterStore.decrement();

        // CHECK IF THE COUNTER WAS DECREMENTED CORRECTLY //
        expect(counterStore.count).toBe(0);

    });

});