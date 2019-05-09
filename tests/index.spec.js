import modules from '../src'

/** @test {myModule} */
describe('modules', () => {
  it('exists', () => {
    expect(modules).toBeDefined()
  })

  it('module returns function', () => {
    expect(modules.module()).toBeInstanceOf(Function)
  })

  it('module function returns true', () => {
    expect(modules.module()()).toBe(true)
  })

})
