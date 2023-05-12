USE [Final_Project_Web]
GO

/****** Object:  Table [dbo].[Contact]    Script Date: 2022-11-29 7:38:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Contact](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Email] [varchar](50) NOT NULL,
    [Studentid] [varchar](10) NULL
	[Comment] [varchar](50) NOT NULL,
) ON [PRIMARY]
GO