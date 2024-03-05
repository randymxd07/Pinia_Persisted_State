import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import HomeView from '../../src/views/HomeView.vue';
import { createPinia } from 'pinia';

describe('HomeView Page', () => {

    /**------------------------------------------------------------------------
     * TEST TO VERIFY THAT THE HOMEVIEW COMPONENT RENDERS CORRECTLY AND THAT
     * ITS HTML REPRESENTATION MATCHES A PREVIOUSLY SAVED SNAPSHOT.
    ---------------------------------------------------------------------------*/
    test('should take a snapshot of the component', () => {

        const pinia = createPinia();

        const wrapper = shallowMount(HomeView, {
            global: {
                plugins: [pinia],
            },
        });

        expect(wrapper.html()).toMatchSnapshot();

    });

    /**---------------------------------------------------------------------------------------
     * TEST TO VERIFY THAT THE COUNTER IS INCREMENTED WHEN THE INCREMENT BUTTON IS CLICKED.
     * WE SIMULATE A CLICK ON THE INCREMENT BUTTON, THEN VERIFY THAT THE COUNTER TEXT
     * CONTAINS THE EXPECTED VALUE AFTER THE INTERACTION.
    ------------------------------------------------------------------------------------------*/
    test('should increment count when increment button is clicked', async () => {

        const pinia = createPinia();

        const wrapper = shallowMount(HomeView, {
            global: {
                plugins: [pinia],
            },
        });

        const incrementButton = wrapper.find('[data-testid="increment-button"]');

        await incrementButton.trigger('click');

        const countText = wrapper.find('h1').text();

        expect(countText).toContain('Count: 1');

    });

    /**---------------------------------------------------------------------------------------
     * TEST TO VERIFY THAT THE COUNTER IS DECREMENTED WHEN THE DECREMENT BUTTON IS CLICKED.
     * WE SIMULATE A CLICK ON THE DECREMENT BUTTON, THEN VERIFY THAT THE COUNTER TEXT
     * CONTAINS THE EXPECTED VALUE AFTER THE INTERACTION.
    ------------------------------------------------------------------------------------------*/
    test('should decrement count when decrement button is clicked', async () => {

        const pinia = createPinia();

        const wrapper = shallowMount(HomeView, {
            global: {
                plugins: [pinia],
            },
        });

        const decrementButton = wrapper.find('[data-testid="decrement-button"]');

        await decrementButton.trigger('click');

        const countText = wrapper.find('h1').text();

        expect(countText).toContain('Count: -1');

    });

});