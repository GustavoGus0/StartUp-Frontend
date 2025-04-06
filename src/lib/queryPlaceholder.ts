interface IProject {
  id: number | string
  title: string
  description: string
  images?: HTMLImageElement | React.JSX.Element | null | string
}

export const projects_data: IProject[] = []
