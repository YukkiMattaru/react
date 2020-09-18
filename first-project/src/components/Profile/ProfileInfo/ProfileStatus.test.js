import React from 'react';
import ProfileStatus from "./ProfileStatus";
import ReactTestRenderer from 'react-test-renderer'

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = ReactTestRenderer.create(<ProfileStatus status="it-kamasutra.com"/>);
        const root = component.root;
        expect(root.props.status).toBe("it-kamasutra.com")
    })

    test("after creation span should be displayed", () => {
        const component = ReactTestRenderer.create(<ProfileStatus status="it-kamasutra.com"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBe(null);
    })

    test("after creation input shouldn't be displayed", () => {
        const component = ReactTestRenderer.create(<ProfileStatus status="it-kamasutra.com"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow;
    })

    test("input should be displayed in editMode instead of span", () => {
            const component = ReactTestRenderer.create(<ProfileStatus status="it-kamasutra.com"/>);
            const root = component.root;
            let span = root.findByType("span");
            span.props.onDoubleClick();
            let input = root.findByType("input");
            expect(input.props.value).toBe("it-kamasutra.com")
    })

    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = ReactTestRenderer.create(<ProfileStatus updateStatus={mockCallBack} status="it-kamasutra.com"/>);
        const root = component.root;
        root.activateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1)
    })
})