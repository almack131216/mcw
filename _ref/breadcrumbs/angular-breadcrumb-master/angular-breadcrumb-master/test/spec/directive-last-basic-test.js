/*jshint undef: false */

describe('Last step directive with basic conf', function() {

    var element, scope;

    beforeEach(function() {
        module('ncy-basic-conf');
    });

    describe('without template', function() {

        beforeEach(inject(function($rootScope, $compile) {
            element = angular.element('<span ncy-breadcrumb-last></span>');
            var compile = $compile(element);
            scope = $rootScope.$new();
            compile(scope);
            scope.$digest();
        }));

        it('renders the last step label correctly', inject(function() {
            goToState('D');
            scope.$emit('$viewContentLoaded');
            scope.$digest();

            console.info('Directive content : ' + element.text());
            expect(element.text()).toBe('State D');
        }));

    });

    describe('with template', function() {

        beforeEach(inject(function($rootScope, $compile) {
            element = angular.element('<span ncy-breadcrumb-last="{{ncyBreadcrumbLabel}}|{{ncyBreadcrumbLink}}"></span>');
            var compile = $compile(element);
            scope = $rootScope.$new();
            compile(scope);
            scope.$digest();
        }));

        it('renders the template correctly', inject(function() {
            goToState('D');
            scope.$emit('$viewContentLoaded');
            scope.$digest();

            console.info('Directive content : ' + element.text());
            expect(element.text()).toBe('State D|#/a/b/c/d');
        }));

    });

});
