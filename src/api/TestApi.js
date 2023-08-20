import {getAxiosBase} from "./index";

export const getTestQuestions = (testName) => {
    return getAxiosBase().get(`question_test/filter_test_name/${testName}`).then(res => res.data);
};


export const getPay = (data) => {
    return getAxiosBase().post('payment/pay/',{identifier: data }).then(res => res.data);
};

export const getPaymentStatus = (identifier) => {
    return getAxiosBase().get(`payment/verify/${identifier}`).then(res => res.data);
};


export const createTest = (male, single) => {
    return getAxiosBase().post(`tester/create`, {male, single}).then(res => res.data);
};
export const getTesterByIdentifier = (identifier) => {
    return getAxiosBase().get(`tester/detail_by_code/${identifier}`).then(res => res.data)
}
export const login = (identifier) => {
    return getAxiosBase().get(`tester/detail_by_code/${identifier}`).then(res => res.data);
};
export const ansQ = (ans) => {
    return getAxiosBase().post(`tester_answer/create_or_update`, ans).then(res => res.data);
};
export const calculateTest = (identifier) => {
    return getAxiosBase().post(`tester_answer/test_calculate`, {identifier}).then(res => res.data);
};
export const calculateEnrichTest = (identifierMan, identifierWoman) => {
    return getAxiosBase().post(`tester_answer/estimate_enrich_by_neo`, {
        identifier_one: identifierMan,
        identifier_two: identifierWoman
    }).then(res => res.data);
};
export const getTestState = (identifier, test_name) => {
    return getAxiosBase().post(`tester_answer/tester_state`, {identifier, test_name}).then(res => res.data);
};
