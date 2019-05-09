import module from '../src'

/** @test {module} */
describe('modules', () => {
  it('exists', () => {
    expect(module).toBeDefined()
  })

  it('module returns function', () => {
    expect(module()).toBeInstanceOf(Function)
  })

  it('module function returns true', () => {
    expect(module()()).toBe(true)
  })
})
